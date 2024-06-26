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
  Image,
  BookmarksSimple,
  FolderStar,
} from "@phosphor-icons/react";

export const menuItems = [
  {
    href: routeConfig.admin_panel_products,
    label: "Товары",
    icon: <Bag size={24} />,
  },
  {
    href: routeConfig.admin_panel_banner,
    label: "Банеры",
    icon: <Image size={24} />,
  },
  {
    href: routeConfig.admin_collections,
    label: "Коллекция",
    icon: <BookmarksSimple size={32} />,
  },
  {
    href: routeConfig.admin_recomendation,
    label: "Рекомендации",
    icon: <FolderStar size={24} />,
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
  }
];
