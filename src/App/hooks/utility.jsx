import { useEffect } from "react";

const useTitleCase = (x) => {
  // Function to convert a string into Title Case.
  if (x) {
    x = x.toLowerCase();
    x = x.split(" ");
    x = x.map((i) => {
      i = i.split("");
      i = i.map((j, index) => {
        if (index === 0) {
          return j.toUpperCase();
        }
        return j;
      });
      return i.join("");
    });
    return x.join(" ");
  }
};

export { useTitleCase };
