import FAB from "ui/FAB";
import IconButton from "ui/IconButton";
import TopBar from "ui/TopBar";

const Row = ({ children }) => (
  <div
    style={{
      display: "flex",
      gap: "10px",
      alignItems: "center",
      margin: "30px",
    }}
  >
    {children}
  </div>
);

export default function Memorizer() {
  return (
    <main style={{ display: "grid", width: "100%" }}>
      <TopBar
        title="Hebreus 4:14-16"
        right={<IconButton type="tonal" icon="book" />}
      />
      <Row>
        <FAB icon="home" size="small" />
        <FAB icon="home" />
        <FAB icon="home" size="large" />
        <FAB icon="home" lowered size="small" />
        <FAB icon="home" lowered />
        <FAB icon="home" lowered size="large" />
      </Row>
      <Row>
        <FAB icon="home" type="secondary" size="small" />
        <FAB icon="home" type="secondary" />
        <FAB icon="home" type="secondary" size="large" />
        <FAB icon="home" type="secondary" lowered size="small" />
        <FAB icon="home" type="secondary" lowered />
        <FAB icon="home" type="secondary" lowered size="large" />
      </Row>
      <Row>
        <FAB icon="home" type="tertiary" size="small" />
        <FAB icon="home" type="tertiary" />
        <FAB icon="home" type="tertiary" size="large" />
        <FAB icon="home" type="tertiary" lowered size="small" />
        <FAB icon="home" type="tertiary" lowered />
        <FAB icon="home" type="tertiary" lowered size="large" />
      </Row>
      <Row>
        <FAB icon="home" type="surface" size="small" />
        <FAB icon="home" type="surface" />
        <FAB icon="home" type="surface" size="large" />
        <FAB icon="home" type="surface" lowered size="small" />
        <FAB icon="home" type="surface" lowered />
        <FAB icon="home" type="surface" lowered size="large" />
      </Row>
      <Row>
        <FAB icon="home" type="branded" size="small" />
        <FAB icon="home" type="branded" />
        <FAB icon="home" type="branded" size="large" />
        <FAB icon="home" type="branded" lowered size="small" />
        <FAB icon="home" type="branded" lowered />
        <FAB icon="home" type="branded" lowered size="large" />
      </Row>
    </main>
  );
}
