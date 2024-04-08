import Button from "ui/Button";

export default function Memorizer() {
  return (
    <main style={{ display: "flex", gap: "15px" }}>
      <Button type="text">Cancelar</Button>
      <Button>Decorar</Button>
      <Button type="tonal">Voltar</Button>
    </main>
  );
}
