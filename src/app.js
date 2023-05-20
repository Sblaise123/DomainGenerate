let alldomains = [];
let pronoun = ["they", "he", "she", "our"];
let adj = ["little", "small", "big", "great"];
let noun = ["raccoon", "runner", "dog", "bug"];
let ends = [".org", ".com", ".edu"];

const domainName = () => {
  for (let i = 0; i < pronoun.length; i++) {
    for (let a = 0; a < adj.length; a++) {
      for (let b = 0; b < noun.length; b++) {
        for (let e = 0; e < ends.length; e++)
          alldomains.push(pronoun[i] + adj[a] + noun[b] + ends[e]);
      }
    }
  }
  return alldomains;
};

console.log(domainName());

window.onload = () => {
  const domainNames = domainName();
  const domainNameContainer = document.getElementById("domain-names");
  domainNameContainer.innerHTML = domainNames.join("<br>");
};
