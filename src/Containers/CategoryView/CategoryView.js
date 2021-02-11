import React from "react";
import CardView from "../../components/CardView/CardView";
import { tabs } from "../../constants";
import useGetCategoryList from "../../hooks/useGetCategoryList";
import useAppStore from "../../stores/useAppStore";

const setCurrentTabSelector = (state) => state.setCurrentTab;
const setCategoryInfoSelector = (state) => state.setCategoryInfo;

const CategoryView = () => {
  const getCategoriesQuery = useGetCategoryList();
  const setCurrentTab = useAppStore(setCurrentTabSelector);
  const setCategoryInfo = useAppStore(setCategoryInfoSelector);

  const onCardClick = (id, name) => {
    setCategoryInfo({ id, name });
    setCurrentTab(tabs.SUB_PLAYLIST_VIEW);
  };

  if (getCategoriesQuery.isLoading) {
    return <div>Loading...</div>;
  }

  if (getCategoriesQuery.isError) {
    return <div>Failed to load.</div>;
  }

  if (getCategoriesQuery.isSuccess) {
    return (
      <div className="space-y-6">
        <div>
          <h1 className="text-4xl font-bold tracking-wide dark:text-white">
            Categories
          </h1>
        </div>
        <div className="album-list">
          {getCategoriesQuery.data?.data?.categories?.items?.map(
            ({ id, name, icons, description }) => (
              <div key={id}>
                <CardView
                  onCardClick={() => onCardClick(id, name)}
                  description={description}
                  name={name}
                  imageUrl={icons?.[0]?.url}
                />
              </div>
            )
          )}
        </div>
      </div>
    );
  }

  return null;
};

export default CategoryView;
