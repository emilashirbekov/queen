import {
  useDeleteSizeMutation,
  useGetSizesQuery,
} from "@/features/Colors&Sizes/ui/model/services/sizesApi";
import { AdminPanelHeader } from "@/widgets/AdminPanelHeader";
import RequestProcessing from "@/widgets/RequestProcessing/RequestProcessing";
import AdminPanelSizesForm from "./AdminPanelSizesForm";
import AdminPanelSizesTable from "./AdminPanelSizesTable";
import { AdminBannerPage } from "../../AdminBannerPage";

const AdminSizesPage = () => {
  const { data: sizes, isLoading, error } = useGetSizesQuery();
  const [deleteSize] = useDeleteSizeMutation();
  const handleDeleteSize = (id: number) => {
    deleteSize(id);
  };

  return (
    <section className="max-admin-container padding-admin-container">
      <AdminPanelHeader text="Размеры товаров" />
      <AdminPanelSizesForm />
      <AdminPanelSizesTable
        sizes={sizes?.results}
        deleteSize={handleDeleteSize}
      />
      <RequestProcessing isLoading={isLoading} error={error} />
      <AdminBannerPage />
    </section>
  );
};

export default AdminSizesPage;
