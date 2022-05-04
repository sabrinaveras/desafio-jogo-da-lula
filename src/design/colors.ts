interface Color {
  hexColor: string;
}

interface ColorObject {
  [key: string]: Color;
}

export const colors: ColorObject = {
  primaryBrand: {
    hexColor: "#282c34",
  },
  secondaryBrand: {
    hexColor: "#ed1b76",
  },
  light: {
    hexColor: "#ffffff",
  },
  dark: {
    hexColor: "#0c0c0c",
  },
};
