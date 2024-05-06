import { routeConfig } from "@/app/providers/router/config/routeConfig";
import {
  Article,
  Bag,
  FolderSimpleUser,
  FrameCorners,
  Gear,
  HouseSimple,
  Palette,
  Users,
<<<<<<< HEAD
  Image
=======
  BookmarksSimple,
>>>>>>> a9cd9cd113b99a89b29ff1b9dd9607ddfd3c9673
} from "@phosphor-icons/react";

export const menuItems = [
  {
    href: routeConfig.admin_panel_products,
    label: "Товары",
    icon: <Bag size={24} />,
  },
  {
<<<<<<< HEAD
    href: routeConfig.admin_panel_banner,
    label: "Баннеры",
    icon: <Image size={24} />,
=======
    href: routeConfig.admin_collections,
    label: "Коллекция",
    icon: <BookmarksSimple size={32} />,
>>>>>>> a9cd9cd113b99a89b29ff1b9dd9607ddfd3c9673
  },
  {
    href: routeConfig.admin_users,
    label: "Пользователи",
    icon: <Users size={24} />,
  },
  {
    href: routeConfig.admin_orders,
    label: "Заказы",
    icon: <FolderSimpleUser size={24} />,
  },
  {
    href: routeConfig.admin_panel_characteristics,
    label: "Характеристики",
    icon: <Gear size={24} />,
  },
  {
    href: routeConfig.admin_panel_subcategories,
    label: "Категории",
    icon: <Article size={24} />,
  },
  {
    href: routeConfig.admin_panel_colors,
    label: "Цвета",
    icon: <Palette size={24} />,
  },
  {
    href: routeConfig.admin_panel_sizes,
    label: "Размеры",
    icon: <FrameCorners size={24} />,
  },
  {
    href: routeConfig.main,
    label: "К магазину",
    icon: <HouseSimple size={24} />,
  },
];
