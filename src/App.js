const rootElement = document.getElementById("root");

// 1. Create the root (do this only ONCE)
const root = ReactDOM.createRoot(rootElement);

// 2. Create your content
const heading4 = React.createElement(
  "h4",
  null,
  "This is the correct React 18 way!",
);

// 3. Render it
root.render(heading4);
