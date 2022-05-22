import {
  useMatches
} from "/build/_shared/chunk-SKDCIZ45.js";
import {
  __toESM,
  init_react,
  require_react
} from "/build/_shared/chunk-6BO74FWO.js";

// app/utils.ts
init_react();
var import_react = __toESM(require_react());
function useMatchesData(id) {
  const matchingRoutes = useMatches();
  const route = (0, import_react.useMemo)(() => matchingRoutes.find((route2) => route2.id === id), [matchingRoutes, id]);
  return route == null ? void 0 : route.data;
}
function isUser(user) {
  return user && typeof user === "object";
}
function useOptionalUser() {
  const data = useMatchesData("root");
  if (!data || !isUser(data.user)) {
    return void 0;
  }
  return data.user;
}
function useUser() {
  const maybeUser = useOptionalUser();
  if (!maybeUser) {
    throw new Error("No user found in root loader, but user is required by useUser. If user is optional, try useOptionalUser instead.");
  }
  return maybeUser;
}

export {
  useOptionalUser,
  useUser
};
//# sourceMappingURL=/build/_shared/chunk-SCAE34XM.js.map
