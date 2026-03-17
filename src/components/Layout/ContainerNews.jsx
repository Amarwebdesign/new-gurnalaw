export default function ContainerNews({children, ContainerClass}) {
  return <div className={`xl:max-w-[1200px] 2xl:max-w-[1300px] mx-auto px-3 lg:px-5 ${ContainerClass}`}>{children}</div>;
}
