import "./category-item.styles.scss";

const CategoryItem = ({ category }) => {
  const { srcImg, title, alt, type } = category;
  return (
    <div className={`${type}-container`}>
      <div className="background-image">
        <img alt={alt} src={srcImg} />
      </div>
      <div className={`${type}-body-container`}>
        <h2 className={`${type}-title`}>{title}</h2>
      </div>
    </div>
  );
};

export default CategoryItem;
