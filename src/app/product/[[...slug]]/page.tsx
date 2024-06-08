type DetailProduct = { params: { slug: string[] } };

export default function DetailProductPage(props: DetailProduct) {
  const { params } = props;
  console.log(params);

  return (
    <div>
      <h1>This is detail product</h1>
      {params.slug && (
        <>
          <h2>Category : {params.slug[0]}</h2>
          <h2>Gender : {params.slug[1]}</h2>
          <h2>id : {params.slug[2]}</h2>
        </>
      )}
    </div>
  );
}
