import { AppointmentProps } from "../components/Appointment";

type ParamsProps = {
    guildSelected: AppointmentProps;
}

export declare global {
    namespace ReactNavigation {
        interface RootParamList {
            Home: undefined;
            SignIn: undefined;
            AppointmentDetails: ParamsProps;
            AppointmentCreate: undefined;
            Guilds: undefined;
        }
    }
}