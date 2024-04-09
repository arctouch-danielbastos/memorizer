import Button from "ui/Button";
import Book from "@material-design-icons/svg/outlined/book.svg";
import TopBar from "ui/TopBar";

export default function Memorizer() {
  return (
    <main style={{ display: "grid", width: "100%" }}>
      <TopBar title="Hebreus 4:14-16" icon={<Book />} />
    </main>
  );
}
