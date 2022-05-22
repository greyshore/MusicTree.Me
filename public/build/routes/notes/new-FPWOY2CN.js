import {
  require_note
} from "/build/_shared/chunk-2YJZUK4K.js";
import {
  require_session
} from "/build/_shared/chunk-ME5PAYV3.js";
import {
  Form
} from "/build/_shared/chunk-SKDCIZ45.js";
import {
  React,
  __toESM,
  init_react
} from "/build/_shared/chunk-6BO74FWO.js";

// browser-route-module:/Users/paula/code/MusicTree/trap-stack/app/routes/notes/new.tsx?browser
init_react();

// app/routes/notes/new.tsx
init_react();
var import_note = __toESM(require_note());
var import_session = __toESM(require_session());
function NewNotePage() {
  return /* @__PURE__ */ React.createElement(Form, {
    method: "post",
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8,
      width: "100%"
    }
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", {
    className: "flex w-full flex-col gap-1"
  }, /* @__PURE__ */ React.createElement("span", null, "Title: "), /* @__PURE__ */ React.createElement("input", {
    name: "title",
    className: "flex-1 rounded-md border-2 border-blue-500 px-3 text-lg leading-loose"
  }))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", {
    className: "flex w-full flex-col gap-1"
  }, /* @__PURE__ */ React.createElement("span", null, "Body: "), /* @__PURE__ */ React.createElement("textarea", {
    name: "body",
    rows: 8,
    className: "w-full flex-1 rounded-md border-2 border-blue-500 py-2 px-3 text-lg leading-6"
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "text-right"
  }, /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    className: "rounded bg-blue-500  py-2 px-4 text-white hover:bg-blue-600 focus:bg-blue-400"
  }, "Save")));
}
export {
  NewNotePage as default
};
//# sourceMappingURL=/build/routes/notes/new-FPWOY2CN.js.map
