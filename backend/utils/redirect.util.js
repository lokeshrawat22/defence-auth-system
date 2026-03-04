function getRedirect(org) {

  if (org === "navy") return "http://localhost:3000";
  if (org === "army") return "http://localhost:4200";
  if (org === "airforce") return "http://localhost:8000";

}

module.exports = getRedirect;
