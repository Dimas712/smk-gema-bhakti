export default function FormSection({ title, children }) {
  return (
    <section className="mb-8">
      <h2 className="font-semibold mb-4">{title}</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {children}
      </div>
    </section>
  );
}
