import { Button } from "../components/Button";
import { Icon } from "../components/Icon";
import { HiArchive } from "react-icons/hi";

export default function Home() {
  return (
    <main>
      <Button>
        test
        <Icon icon={HiArchive} />
      </Button>
      <Button disabled>test<Icon icon={HiArchive} /></Button>
      <Button size="small">test<Icon icon={HiArchive} /></Button>
      <Button size="extra-small">test<Icon icon={HiArchive} /></Button>

      <Button variant="secondary"><Icon icon={HiArchive} />test</Button>
      <Button variant="secondary" disabled><Icon icon={HiArchive} />test</Button>
      <Button variant="secondary" size="small"><Icon icon={HiArchive} />test</Button>
      <Button variant="secondary" size="extra-small">test<Icon icon={HiArchive} /></Button>

      <Button variant="tertiary">test<Icon icon={HiArchive} /></Button>
      <Button variant="tertiary" disabled><Icon icon={HiArchive} />test</Button>
      <Button variant="tertiary" size="small"><Icon icon={HiArchive} />test</Button>
      <Button variant="tertiary" size="extra-small"><Icon icon={HiArchive} />test</Button>
    </main>
  )
}
