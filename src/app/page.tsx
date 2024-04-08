import Button from "ui/Button";
import Book from "@material-design-icons/svg/outlined/book.svg";

const Row = ({ children }) => (
  <div style={{ display: "flex", gap: "15px" }}>{children}</div>
);

export default function Memorizer() {
  return (
    <main style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
      <Row>
        <Button type="elevated">Decorar</Button>
        <Button icon={<Book />} type="elevated">
          Decorar
        </Button>
        <Button disabled type="elevated">
          Cancelar
        </Button>
      </Row>

      <Row>
        <Button type="filled">Decorar</Button>
        <Button icon={<Book />} type="filled">
          Decorar
        </Button>
        <Button disabled type="filled">
          Cancelar
        </Button>
      </Row>

      <Row>
        <Button type="tonal">Decorar</Button>
        <Button icon={<Book />} type="tonal">
          Decorar
        </Button>
        <Button disabled type="tonal">
          Cancelar
        </Button>
      </Row>

      <Row>
        <Button type="text">Decorar</Button>
        <Button icon={<Book />} type="text">
          Decorar
        </Button>
        <Button disabled type="text">
          Cancelar
        </Button>
      </Row>

      <Row>
        <Button type="outlined">Decorar</Button>
        <Button icon={<Book />} type="outlined">
          Decorar
        </Button>
        <Button disabled type="outlined">
          Cancelar
        </Button>
      </Row>
    </main>
  );
}
