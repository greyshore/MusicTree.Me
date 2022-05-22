import {
  require_note
} from "/build/_shared/chunk-2YJZUK4K.js";
import {
  require_session
} from "/build/_shared/chunk-ME5PAYV3.js";
import {
  Form,
  useLoaderData
} from "/build/_shared/chunk-COFHBGIN.js";
import {
  React,
  __toESM,
  init_react
} from "/build/_shared/chunk-6BO74FWO.js";

// browser-route-module:/Users/paula/code/MusicTree/trap-stack/app/routes/notes/$noteId.tsx?browser
init_react();

// app/routes/notes/$noteId.tsx
init_react();
var import_note = __toESM(require_note());
var import_session = __toESM(require_session());
function NoteDetailsPage() {
  const data = useLoaderData();
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h3", {
    className: "text-2xl font-bold"
  }, data.note.title), /* @__PURE__ */ React.createElement("p", {
    className: "py-6"
  }, data.note.body), /* @__PURE__ */ React.createElement("hr", {
    className: "my-4"
  }), /* @__PURE__ */ React.createElement(Form, {
    method: "post"
  }, /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    className: "rounded bg-blue-500  py-2 px-4 text-white hover:bg-blue-600 focus:bg-blue-400"
  }, "Delete")));
}
export {
  NoteDetailsPage as default
};
//# sourceMappingURL=/build/routes/notes/$noteId-R2VA5IQF.js.map
