export function LoginPage() {
  return (
    <section className="mx-auto max-w-md rounded-2xl bg-white p-8 shadow-sm">
      <h1 className="text-2xl font-bold">تسجيل دخول المشرف</h1>

      <form className="mt-6 space-y-4">
        <input
          className="w-full rounded-xl border px-4 py-3"
          type="email"
          placeholder="البريد الإلكتروني"
        />

        <input
          className="w-full rounded-xl border px-4 py-3"
          type="password"
          placeholder="كلمة المرور"
        />

        <button className="w-full rounded-xl bg-black px-4 py-3 font-medium text-white">
          دخول
        </button>
      </form>
    </section>
  );
}
