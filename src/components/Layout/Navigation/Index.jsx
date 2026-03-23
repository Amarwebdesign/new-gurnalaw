import NavLink from "@/components/Layout/Navigation/NavLink";
import NavSubLink from "@/components/Layout/Navigation/NavSubLink";

export default function Navigation() {
  return (
    <ul className="xl:flex gap-7 items-center group-[.header-fix]:md:gap-5">
      <li className="group relative"><NavLink href="/about" name="About" /></li>
      <li className="group relative">
        <NavLink href="/practice-areas" name="Practice Areas" />
        <ul className="sub-menu">
          <li><NavSubLink href="/judicial-reviews" name="Judicial Reviews" /></li>
          <li><NavSubLink href="/immigration-appeals" name="Immigration Appeals" /></li>
          <li><NavSubLink href="/ircc-applications" name="IRCC Applications" /></li>
          <li><NavSubLink href="/refugee-claims-and-appeals" name="Refugee Claims and Appeals" /></li>
          <li><NavSubLink href="/id-hearings" name="ID Hearings" /></li>
          <li><NavSubLink href="/visa-refusal-lawyer" name="Visa Refusal" /></li>
          <li><NavSubLink href="/citizenship-lawyer" name="Citizenship Lawyer" /></li>
          <li><NavSubLink href="/notary-public" name="Notary Public" /></li>
        </ul>
      </li>
      <li className="group relative">
        <NavLink href="/locations" name="Locations" />
        <ul className="sub-menu">
          <li><NavSubLink href="/immigration-lawyer-in-surrey" name="Surrey" /></li>
          <li><NavSubLink href="/immigration-lawyer-in-abbotsford" name="Abbotsford" /></li>
          <li><NavSubLink href="/immigration-lawyer-in-vancouver" name="Vancouver" /></li>
          <li><NavSubLink href="/immigration-lawyer-in-coquitlam" name="Coquitlam" /></li>
          <li><NavSubLink href="/immigration-lawyer-in-burnaby" name="Burnaby" /></li>
          <li><NavSubLink href="/immigration-lawyer-in-langley" name="Langley" /></li>
          <li><NavSubLink href="/immigration-lawyer-in-richmond" name="Richmond" /></li>
        </ul>
      </li>
      <li className="group relative"><NavLink href="/media" name="Media" /></li>
      <li className="group relative"><NavLink href="/canada-immigration-news" name="Immigration News" /></li>
      <li className="group relative"><NavLink href="/contact" name="Contact" /></li>
    </ul>
  );
}
