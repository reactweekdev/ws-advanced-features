import PageLayout from 'components/PageLayout'
import { BodyText, Title } from 'components/UI'

interface Props {}

const DashboardPage = (props: Props) => (
    <PageLayout titleComponent={<Title>Dashboard</Title>}>
        <BodyText>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, dignissimos,
            tempora ea exercitationem suscipit quidem perspiciatis magni odio consectetur
            quasi totam est voluptates omnis! Quasi nihil praesentium ipsum expedita
            quibusdam.
        </BodyText>
    </PageLayout>
)

export default DashboardPage
