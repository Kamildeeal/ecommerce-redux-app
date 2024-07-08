import React from "react";
import {
  GiDelicatePerfume,
  GiComb,
  GiPoloShirt,
  GiSonicShoes,
} from "react-icons/gi";
import { MdOutlineChair } from "react-icons/md";
import { FaShoppingBasket } from "react-icons/fa";
import { FaKitchenSet } from "react-icons/fa6";
import { LiaLaptopSolid } from "react-icons/lia";
import { FiWatch } from "react-icons/fi";
import { LuLamp } from "react-icons/lu";
import { CiHeadphones } from "react-icons/ci";
import { BsFillHouseDownFill } from "react-icons/bs";
import Categories from "@/lib/enums/ProductCategories";

type IconType = React.ComponentType<React.SVGAttributes<SVGElement>>;

const categoryIcons: Record<Categories, IconType> = {
  [Categories.Beauty]: GiComb,
  [Categories.Furniture]: MdOutlineChair,
  [Categories.Groceries]: FaShoppingBasket,
  [Categories.Fragrances]: GiDelicatePerfume,
  [Categories.HomeDecorations]: LuLamp,
  [Categories.KitchenAccesories]: FaKitchenSet,
  [Categories.Laptops]: LiaLaptopSolid,
  [Categories.MenShirts]: GiPoloShirt,
  [Categories.MenShoes]: GiSonicShoes,
  [Categories.MenWatches]: FiWatch,
  [Categories.MonbileAccesories]: CiHeadphones,
  [Categories.AllItems]: BsFillHouseDownFill,
};

export default categoryIcons;
