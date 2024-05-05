import { AboutPage } from "@/pages/About";
import { AdminColorsPage } from "@/pages/AdminPanelPages/AdminColorsPage";
import {
  AdminPanelAddCategory,
  AdminPanelAddSubcategories,
  AdminPanelCategories,
  AdminPanelChangeCategory,
  AdminPanelChangeSubcategories,
  AdminPanelSubCategories,
} from "@/pages/AdminPanelPages/AdminPanelCategories";
import { AdminPanelCharacteristics } from "@/pages/AdminPanelPages/AdminPanelCharacteristics";
import { AdminPanelOrders } from "@/pages/AdminPanelPages/AdminPanelOrders";
import { AdminPanelAddProducts } from "@/pages/AdminPanelPages/AdminPanelProducts";
import AdminPanelChangeProducts from "@/pages/AdminPanelPages/AdminPanelProducts/ui/AdminPanelChangeProducts/AdminPanelChangeProducts";
import AdminPanelProducts from "@/pages/AdminPanelPages/AdminPanelProducts/ui/AdminPanelProducts";
import { AdminPanelUsers } from "@/pages/AdminPanelPages/AdminPanelUsers/ui/AdminPanelUsers";
import { AdminSizesPage } from "@/pages/AdminPanelPages/AdminSizesPage";
import { LoginPage } from "@/pages/AuthPage/ui/LoginPage";
import { RegisterPage } from "@/pages/AuthPage/ui/RegisterPage";
import Basket from "@/pages/Basket/Basket";
import { DeliveryPage } from "@/pages/DeliveryPage";
import MainPage from "@/pages/MainPage";
import { MyRoomPage } from "@/pages/MyRoomPage";
import ChangePassword from "@/pages/MyRoomPage/ui/ChangePassword";
import { OneItemPage } from "@/pages/OneItemPage";
import { OrderPage } from "@/pages/OrderPage";
import { FAQ } from "@/widgets/FAQ";
import { PaymentMethod } from "@/widgets/Payment";
import { RouteProps } from "react-router-dom";
import CatalogPage from "../../../../pages/Catalog/ui/CatalogPage";
import NotFound from "../../../../pages/NotFound";

export enum AppRoutes {
  MAIN = "main",
  ABOUT = "about",
  CATALOG = "catalog/:category",
  REGISTER = "register",
  LOGIN = "login",
  MY_ROOM = "my-room",
  NOT_FOUND = "not_found",
  BASKET = "basket",
  ORDERS = "orders",
  FAQ = "faq",
  CHANGE_PASSWORD = "changePassword",
  DELIVERY = "delivery",
  PAYMENT_METHOD = "paymentMethod",

  ADMIN_PANEL_PRODUCTS = "admin_panel_products",
  ADMIN_CHANGE_PRODUCTS = "admin_change_products/:id",
  ADMIN_ADD_PRODUCTS = "admin_add_products",

  ADMIN_PANEL_CATEGORIES = "admin_panel_categories",
  ADMIN_PANEL_ADD_CATEGORIES = "admin_panel_add_categories",
  ADMIN_PANEL_SUBCATEGORIES = "admin_panel_subcategories",
  ADMIN_PANEL_ADD_SUBCATEGORIES = "admin_panel_add_subcategories",
  ADMIN_PANEL_CHANGE_SUBCATEGORIES = "admin_panel_change_subcategories",
  ADMIN_CHANGE_CATEGORIES = "admin_change_categories",
  ADMIN_PANEL_USERS = "admin_users",
  ADMIN_PANEL_ORDERS = "admin_orders",

  ADMIN_PANEL_COLORS = "admin_panel_colors",
  ADMIN_PANEL_SIZES = "admin_panel_sizes",
  ADMIN_PANEL_CHARACTERISTICS = "admin_panel_characteristics",
  ONE_ITEM = "catalog/one_item",
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: "/",
    element: <MainPage />,
  },
  [AppRoutes.ABOUT]: {
    path: "/about",
    element: <AboutPage />,
  },
  [AppRoutes.CATALOG]: {
    path: "/catalog/:category",
    element: <CatalogPage />,
  },
  [AppRoutes.REGISTER]: {
    path: "/register",
    element: <RegisterPage />,
  },
  [AppRoutes.LOGIN]: {
    path: "/login",
    element: <LoginPage />,
  },
  [AppRoutes.MY_ROOM]: {
    path: "/my-room",
    element: <MyRoomPage />,
  },
  [AppRoutes.BASKET]: {
    path: "/basket",
    element: <Basket />,
  },
  [AppRoutes.ORDERS]: {
    path: "/orders/:id",
    element: <OrderPage />,
  },
  [AppRoutes.ADMIN_PANEL_PRODUCTS]: {
    path: "/admin_panel_products",
    element: <AdminPanelProducts />,
  },
  [AppRoutes.ADMIN_CHANGE_PRODUCTS]: {
    path: "/admin_change_products/:id",
    element: <AdminPanelChangeProducts />,
  },
  [AppRoutes.ADMIN_PANEL_CATEGORIES]: {
    path: "/admin_panel_categories",
    element: <AdminPanelCategories />,
  },
  [AppRoutes.ADMIN_PANEL_ADD_CATEGORIES]: {
    path: "/admin_panel_add_categories",
    element: <AdminPanelAddCategory />,
  },
  [AppRoutes.ADMIN_PANEL_SUBCATEGORIES]: {
    path: "/admin_panel_subcategories",
    element: <AdminPanelSubCategories />,
  },
  [AppRoutes.ADMIN_PANEL_ADD_SUBCATEGORIES]: {
    path: "/admin_panel_add_subcategories",
    element: <AdminPanelAddSubcategories />,
  },
  [AppRoutes.ADMIN_PANEL_CHANGE_SUBCATEGORIES]: {
    path: "/admin_panel_change_subcategories/:id",
    element: <AdminPanelChangeSubcategories />,
  },
  [AppRoutes.ADMIN_CHANGE_CATEGORIES]: {
    path: "/admin_change_categories/:id",
    element: <AdminPanelChangeCategory />,
  },
  [AppRoutes.ADMIN_PANEL_COLORS]: {
    path: "/admin_panel_colors",
    element: <AdminColorsPage />,
  },
  [AppRoutes.ADMIN_PANEL_SIZES]: {
    path: "/admin_panel_sizes",
    element: <AdminSizesPage />,
  },
  [AppRoutes.ADMIN_PANEL_CHARACTERISTICS]: {
    path: "/admin_panel_characteristics",
    element: <AdminPanelCharacteristics />,
  },
  [AppRoutes.ADMIN_ADD_PRODUCTS]: {
    path: "/admin_add_products",
    element: <AdminPanelAddProducts />,
  },
  [AppRoutes.ADMIN_PANEL_USERS]: {
    path: "/admin_users",
    element: <AdminPanelUsers />,
  },
  [AppRoutes.ADMIN_PANEL_ORDERS]: {
    path: "/admin_orders",
    element: <AdminPanelOrders />,
  },
  [AppRoutes.ONE_ITEM]: {
    path: "catalog/one_item/:id",
    element: <OneItemPage />,
  },
  [AppRoutes.FAQ]: {
    path: "/faq",
    element: <FAQ />,
  },
  [AppRoutes.CHANGE_PASSWORD]: {
    path: "/changePassword",
    element: <ChangePassword />,
  },
  [AppRoutes.NOT_FOUND]: {
    path: "*",
    element: <NotFound />,
  },
  [AppRoutes.DELIVERY]: {
    path: "/delivery",
    element: <DeliveryPage />,
  },
  [AppRoutes.PAYMENT_METHOD]: {
    path: "/paymentMethod",
    element: <PaymentMethod />,
  },
};
