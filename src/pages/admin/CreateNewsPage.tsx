export function CreateNewsPage() {
  return (
    <section className="rounded-2xl bg-white p-8 shadow-sm">
      <h1 className="text-3xl font-bold">إضافة خبر جديد</h1>

      <form className="mt-6 space-y-4">
        <input className="w-full rounded-xl border px-4 py-3" placeholder="عنوان الخبر" />
        <textarea className="min-h-40 w-full rounded-xl border px-4 py-3" placeholder="محتوى الخبر" />
        <button className="rounded-xl bg-black px-5 py-3 font-medium text-white">
          حفظ الخبر
        </button>
      </form>
    </section>
  );
}
