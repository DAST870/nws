export function CreateNewsPage() {
  return (
    <section className="rounded-lg bg-white p-5 shadow-sm ring-1 ring-gray-100 sm:p-7">
      <h1 className="text-3xl font-bold text-gray-950">����� ��� ����</h1>
      <p className="mt-3 text-gray-600">
        ����� ����� ��� �����ǡ ����� ��� ����� ���� ����� ������ ��� Supabase.
      </p>

      <form className="mt-6 grid gap-4">
        <label className="grid gap-2">
          <span className="text-sm font-medium text-gray-700">����� �����</span>
          <input className="w-full rounded-md border border-gray-200 px-4 py-3" placeholder="����: ������ ����� �� �������" />
        </label>
        <label className="grid gap-2">
          <span className="text-sm font-medium text-gray-700">�������</span>
          <select className="w-full rounded-md border border-gray-200 px-4 py-3">
            <option>����� �������</option>
            <option>������� ����������</option>
            <option>���������</option>
            <option>�������</option>
          </select>
        </label>
        <label className="grid gap-2">
          <span className="text-sm font-medium text-gray-700">���� ����</span>
          <textarea className="min-h-28 w-full rounded-md border border-gray-200 px-4 py-3" placeholder="���� ������ ���� �� ������ ��������" />
        </label>
        <label className="grid gap-2">
          <span className="text-sm font-medium text-gray-700">����� �����</span>
          <textarea className="min-h-48 w-full rounded-md border border-gray-200 px-4 py-3" placeholder="���� ������ �����" />
        </label>
        <button type="button" className="w-fit rounded-md bg-gray-950 px-5 py-3 font-medium text-white">
          ��� �����
        </button>
      </form>
    </section>
  );
}
