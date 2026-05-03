export interface SuperCategory {
  label: string;
  anchor: string;
  sections: string[];
}

export const superCategories: SuperCategory[] = [
  { label: "Café", anchor: "cafe", sections: ["Para los amantes del café", "Bebidas frías"] },
  { label: "Brunch", anchor: "brunch", sections: ["Buen día, buenas tardes", "Para compartir"] },
  { label: "Pastelería", anchor: "pasteleria", sections: ["Pastelería artesanal by Māma Café", "Panadería para acompañar"] },
  { label: "Sándwiches", anchor: "sandwiches", sections: ["Sándwiches especiales"] },
{ label: "Sin TACC", anchor: "sin-tacc", sections: ["Opciones sin TACC"] },
{ label: "Bebidas", anchor: "bebidas", sections: ["Limonadas", "Smoothies", "Bebidas sin alcohol", "Bebidas con alcohol"] },
  
];
