import Text from "../../features/base_components/Text";
import { useFetchTasksQuery } from "../../../app/connectAPI";

function Dashboard() {
    const {} = useFetchTasksQuery;

    return <Text>Dashboard</Text>;
}

export default Dashboard;
