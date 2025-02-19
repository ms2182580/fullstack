import { useRouter } from "next/router";
import {
  BreadcrumbNav,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbButton,
  Separator,
} from "./styles/breadcrumbs-1-wrapper";
export const Breadcrumbs = () => {

  const router = useRouter();
  const pathSegments = router.asPath.split("/").filter(Boolean);

  return (
    <BreadcrumbNav>
      <BreadcrumbButton onClick={() => router.back()}>{'<<'} Go Back </BreadcrumbButton>
      <BreadcrumbList>
        {pathSegments.map((segment, index) => {
          const path = `/${pathSegments.slice(0, index + 1).join("/")}`;
          return (
            <BreadcrumbItem key={path}>
              <Separator>/</Separator>
              <BreadcrumbButton onClick={() => router.push(path)}>
                {decodeURIComponent(segment)}
              </BreadcrumbButton>
            </BreadcrumbItem>
          );
        })}
      </BreadcrumbList>
    </BreadcrumbNav>
  );
};
