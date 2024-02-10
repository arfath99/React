const heading1 = React.createElement("h1", {}, "Hello World h1")
const heading2 = React.createElement("h2", {}, "Hello World h2")

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render([heading1, heading2])