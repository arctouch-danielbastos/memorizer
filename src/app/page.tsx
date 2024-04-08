import Button from "ui/Button";
import Book from "@material-design-icons/svg/outlined/book.svg";

export default function Memorizer() {
  return (
    <main style={{ display: "flex", gap: "15px" }}>
      <Button type="tonal">Cancelar</Button>
      <Button>Decorar</Button>
      <Button icon={<Book />} disabled>
        Decorar
      </Button>
    </main>
  );
}
