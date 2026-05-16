export interface SuperCategory {
  label: string;
  anchor: string;
  sections: string[];
}

export const superCategories: SuperCategory[] = [
  { label: "Temporada", anchor: "temporada", sections: ["Cafés de Temporada", "Dulce de la Casa", "Tostones de Temporada"] },
  { label: "Infusiones", anchor: "infusiones", sections: ["Infusiones"] },
  { label: "Desayunos y Meriendas", anchor: "desayunos", sections: ["Desayunos y Meriendas"] },
  { label: "Almuerzos", anchor: "almuerzos", sections: ["Ensaladas", "Tartas"] },
  { label: "Panadería", anchor: "panaderia", sections: ["Panadería"] },
  { label: "Sándwiches", anchor: "sandwiches", sections: ["Sándwiches", "Apretaditos"] },
  { label: "Bebidas", anchor: "bebidas", sections: ["Bebidas", "Smoothies"] },
  { label: "Promos Coworkers", anchor: "promos", sections: ["Promos Coworkers", "Transformá tus promos"] },
];
