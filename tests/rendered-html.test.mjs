import assert from "node:assert/strict";
import test from "node:test";

async function render(path = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${path}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("renders the Turkish legal hub", async () => {
  const response = await render("/");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /HMGS Sınav Hazırlık/);
  assert.match(html, /Gizlilik Politikası/);
  assert.match(html, /Kullanım Koşulları/);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton/);
});

test("renders every required public document", async () => {
  for (const [path, expected] of [
    ["/privacy", "Verilerini nasıl koruyoruz?"],
    ["/kvkk", "Kişisel verilerine ilişkin bilgilendirme."],
    ["/terms", "Uygulamayı kullanırken geçerli koşullar."],
    ["/support", "Birlikte çözelim."],
  ]) {
    const response = await render(path);
    assert.equal(response.status, 200);
    assert.match(await response.text(), new RegExp(expected.replace(/[.?]/g, "\\$&")));
  }
});
