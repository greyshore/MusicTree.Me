import {
  require_user
} from "/build/_shared/chunk-DFG4XZEI.js";
import "/build/_shared/chunk-SCAE34XM.js";
import {
  require_session
} from "/build/_shared/chunk-ME5PAYV3.js";
import {
  Form,
  Link,
  useActionData,
  useSearchParams
} from "/build/_shared/chunk-SKDCIZ45.js";
import {
  __toESM,
  init_react,
  require_react
} from "/build/_shared/chunk-6BO74FWO.js";

// browser-route-module:/Users/paula/code/MusicTree/trap-stack/app/routes/join.tsx?browser
init_react();

// app/routes/join.tsx
init_react();
var import_session = __toESM(require_session());
var import_user = __toESM(require_user());
var React = __toESM(require_react());
var meta = () => {
  return {
    title: "Sign Up"
  };
};
function Join() {
  var _a, _b, _c, _d, _e, _f, _g;
  const [searchParams] = useSearchParams();
  const redirectTo = (_a = searchParams.get("redirectTo")) != null ? _a : void 0;
  const actionData = useActionData();
  const emailRef = React.useRef(null);
  const passwordRef = React.useRef(null);
  React.useEffect(() => {
    var _a2, _b2, _c2, _d2;
    if ((_a2 = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _a2.email) {
      (_b2 = emailRef == null ? void 0 : emailRef.current) == null ? void 0 : _b2.focus();
    }
    if ((_c2 = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _c2.password) {
      (_d2 = passwordRef == null ? void 0 : passwordRef.current) == null ? void 0 : _d2.focus();
    }
  }, [actionData]);
  return /* @__PURE__ */ React.createElement("div", {
    className: "flex min-h-full flex-col justify-center"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "mx-auto w-full max-w-md px-8"
  }, /* @__PURE__ */ React.createElement(Form, {
    className: "space-y-6",
    method: "post",
    noValidate: true
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", {
    className: "text-sm font-medium",
    htmlFor: "email"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "block text-gray-700"
  }, "Email Address"), ((_b = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _b.email) && /* @__PURE__ */ React.createElement("span", {
    className: "block pt-1 text-red-700",
    id: "email-error"
  }, (_c = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _c.email)), /* @__PURE__ */ React.createElement("input", {
    className: "w-full rounded border border-gray-500 px-2 py-1 text-lg",
    type: "email",
    name: "email",
    id: "email",
    required: true,
    "aria-invalid": ((_d = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _d.email) ? true : void 0,
    "aria-describedby": "email-error",
    ref: emailRef
  })), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", {
    className: "text-sm font-medium",
    htmlFor: "password"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "block text-gray-700"
  }, "Password"), /* @__PURE__ */ React.createElement("span", {
    className: "block font-light text-gray-700"
  }, "Must have at least 6 characters."), ((_e = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _e.password) && /* @__PURE__ */ React.createElement("span", {
    className: "pt-1 text-red-700",
    id: "password-error"
  }, (_f = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _f.password)), /* @__PURE__ */ React.createElement("input", {
    id: "password",
    type: "password",
    name: "password",
    className: "w-full rounded border border-gray-500 px-2 py-1 text-lg",
    autoComplete: "new-password",
    "aria-invalid": ((_g = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _g.password) ? true : void 0,
    "aria-describedby": "password-error",
    ref: passwordRef
  })), /* @__PURE__ */ React.createElement("button", {
    className: "w-full rounded bg-blue-500  py-2 px-4 text-white hover:bg-blue-600 focus:bg-blue-400",
    type: "submit"
  }, "Create Account"), /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    name: "redirectTo",
    value: redirectTo
  }), /* @__PURE__ */ React.createElement("div", {
    className: "flex items-center justify-center"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "text-center text-sm text-gray-500"
  }, "Already have an account?", " ", /* @__PURE__ */ React.createElement(Link, {
    className: "text-blue-500 underline",
    to: {
      pathname: "/login",
      search: searchParams.toString()
    }
  }, "Log in"))))));
}
export {
  Join as default,
  meta
};
//# sourceMappingURL=/build/routes/join-Z5546MFO.js.map
