// import { StoryPage } from "StorybookConfig/preview";
import { assets, svgOptions } from "./Icon.knob.options";
// import * as Icon from "src/assets/icons";

import {
  AbacusIcon,
  AlertIcon,
  AnalysisIcon,
  IconDownload,
  IconGenerarGuías,
  IconGenerarRecolecciones,
  IconGloboEnvio,
  IconHelp,
  IconHistoriaDeGuia,
  IconHome,
  IconInventario,
  IconLinkDePago,
  IconList,
  IconMisPedidos,
  IconMisProductos,
  IconMoney,
  IconNotification,
  IconPesoPromedio,
  IconRastrearPedido,
  IconReporte,
  IconReportes,
  IconReputación,
  IconRules,
  IconSaldo,
  IconSalir,
  IconSearch,
  IconSearsApp,
  IconTarifas,
  IconTicket,
  IconTrackeoDeGuias,
  IconTransacciones,
  IconUser,
  IconUsers,
  IconVentas,
  IconVideo,
  IconWhatsApp,
  AntifraudIcon,
  BusinessAndFinancIcon,
  CalendarIcon,
  SalesChannelsIcon,
  SalesChannelsIcon1,
  CatalogsIcon,
  CoinsIcon,
  CompanyIcon,
  DashboardIcon,
  DealIcon,
  DevelopmentIcon,
  MoneyIcon,
  AddressesIcon,
  AddressesIcon2,
  EditIcon,
  DeleteIcon,
  EmailIcon,
  BillsIcon,
  FilterIcon,
  FlowIcon,
} from "src/assets/icons";
import * as Icon from "src/assets/icons";
import IconDisplay from "./IconDisplay";

export default {
  title: "brand/icons",
  component: Icon["IconAlert"],
  parameters: {
    // docs: {
    //   page: () => <StoryPage />,
    // },
  },
};

export const BasicIcon = (args) => {
  const SelectedComponent = Icon[args.name];

  return <SelectedComponent {...args} />;
};

BasicIcon.storyName = "Icon";
BasicIcon.args = {
  name: "IconAlert",
  width: 40,
  height: 50,
  title: "Icon Title Here",
  classes: [""],
  ariaHidden: false,
  fill: "#000",
};
BasicIcon.argTypes = {
  name: {
    control: {
      type: "select",
      options: Object.fromEntries(
        Object.entries(svgOptions).map(([key, value]) => [
          `Icon${key[0].toUpperCase() + key.slice(1)}`,
          value ? `Icon${value[0].toUpperCase() + value.slice(1)}` : value,
        ])
      ),
    },
  },
  fill: {
    control: {
      type: "color",
    },
  },
};

export const AllIcons = (args) => {
  return (
    <div className="grid grid-cols-4 gap-12">
      <div>
        <IconDisplay name="AbacusIcon">
          <AbacusIcon width={24} height={24} name="AbacusIcon" />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay name="AlertIcon">
          <AlertIcon width={24} height={24} name="AlertIcon" />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay name="AnalysisIcon">
          <AnalysisIcon width={24} height={24} name="AnalysisIcon" />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay name="AntifraudIcon">
          <AntifraudIcon width={24} height={24} name="AntifraudIcon" />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay name="BusinessAndFinancIcon">
          <BusinessAndFinancIcon
            width={24}
            height={24}
            name="BusinessAndFinancIcon"
          />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay name="CalendarIcon">
          <CalendarIcon width={24} height={24} name="CalendarIcon" />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay name="SalesChannelsIcon">
          <SalesChannelsIcon width={24} height={24} name="SalesChannelsIcon" />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay name="SalesChannelsIcon1">
          <SalesChannelsIcon1
            width={24}
            height={24}
            name="SalesChannelsIcon1"
          />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay name="CatalogsIcon">
          <CatalogsIcon width={24} height={24} name="CatalogsIcon" />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay name="CoinsIcon">
          <CoinsIcon width={24} height={24} name="CoinsIcon" />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay name="CompanyIcon">
          <CompanyIcon width={24} height={24} name="CompanyIcon" />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay name="DashboardIcon">
          <DashboardIcon width={24} height={24} name="DashboardIcon" />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay name="DealIcon">
          <DealIcon width={24} height={24} name="DealIcon" />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay name="DevelopmentIcon">
          <DevelopmentIcon width={24} height={24} name="DevelopmentIcon" />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay name="MoneyIcon">
          <MoneyIcon width={24} height={24} name="MoneyIcon" />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay name="AddressesIcon">
          <AddressesIcon width={24} height={24} name="Direcciones" />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay name="AddressesIcon2">
          <AddressesIcon2 width={24} height={24} name="Direcciones2" />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay name="EditIcon">
          <EditIcon width={24} height={24} name="Editar" />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay name="DeleteIcon">
          <DeleteIcon width={24} height={24} name="Eliminar" />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay name="EmailIcon">
          <EmailIcon width={24} height={24} name="Email" />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay name="BillsIcon">
          <BillsIcon width={24} height={24} name="Facturas" />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay name="FilterIcon">
          <FilterIcon width={24} height={24} name="Filtro" />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay name="FlowIcon">
          <FlowIcon width={24} height={24} name="Flujo" />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay name="IconGenerarGuías">
          <IconGenerarGuías width={24} height={24} name="GenerarGuías" />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay name="IconGenerarRecolecciones">
          <IconGenerarRecolecciones
            width={24}
            height={24}
            name="GenerarRecolecciones"
          />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay name="IconGloboEnvio">
          <IconGloboEnvio width={24} height={24} name="GloboEnvio" />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay name="IconHelp">
          <IconHelp width={24} height={24} name="Help" />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay name="IconHistoriaDeGuia">
          <IconHistoriaDeGuia width={24} height={24} name="HistoriaDeGuia" />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay name="IconHome">
          <IconHome width={24} height={24} name="Home" />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay name="IconDownload">
          <IconDownload width={24} height={24} name="Download" />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay name="IconInventario">
          <IconInventario width={24} height={24} name="Inventario" />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay name="IconLinkDePago">
          <IconLinkDePago width={24} height={24} name="LinkDePago" />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay name="IconList">
          <IconList width={24} height={24} name="List" />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay name="IconMisPedidos">
          <IconMisPedidos width={24} height={24} name="IconMisPedidos" />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay name="IconMisProductos">
          <IconMisProductos width={24} height={24} name="IconMisProductos" />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay name="IconMoney">
          <IconMoney width={24} height={24} name="IconMoney" />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay name="IconNotification">
          <IconNotification width={24} height={24} name="IconNotification" />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay name="IconPesoPromedio">
          <IconPesoPromedio width={24} height={24} name="IconPesoPromedio" />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay name="IconRastrearPedido">
          <IconRastrearPedido
            width={24}
            height={24}
            name="IconRastrearPedido"
          />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay name="IconReporte">
          <IconReporte width={24} height={24} name="IconReporte" />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay name="IconReportes">
          <IconReportes width={24} height={24} name="IconReportes" />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay name="IconReputación">
          <IconReputación width={24} height={24} name="IconReputación" />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay name="IconRules">
          <IconRules width={24} height={24} name="IconRules" />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay name="IconSaldo">
          <IconSaldo width={24} height={24} name="IconSaldo" />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay name="IconSalir">
          <IconSalir width={24} height={24} name="IconSalir" />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay name="IconSearch">
          <IconSearch width={24} height={24} name="IconSearch" />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay name="IconTarifas">
          <IconTarifas width={24} height={24} name="IconTarifas" />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay name="IconTicket">
          <IconTicket width={24} height={24} name="IconTicket" />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay name="IconTrackeoDeGuias">
          <IconTrackeoDeGuias
            width={24}
            height={24}
            name="IconTrackeoDeGuias"
          />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay name="IconTransacciones">
          <IconTransacciones width={24} height={24} name="IconTransacciones" />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay name="IconUser">
          <IconUser width={24} height={24} name="IconUser" />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay name="IconUsers">
          <IconUsers width={24} height={24} name="IconUsers" />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay name="IconVentas">
          <IconVentas width={24} height={24} name="IconVentas" />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay name="IconVideo">
          <IconVideo width={24} height={24} name="IconVideo" />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay name="IconWhatsApp">
          <IconWhatsApp width={24} height={24} name="IconWhatsApp" />
        </IconDisplay>
      </div>
    </div>
  );
};

AllIcons.storyName = "All Icons";
AllIcons.args = {
  width: 140,
  height: 140,
  title: "Icon Title Here",
  classes: [""],
  ariaHidden: false,
  fill: "#000",
};
AllIcons.argTypes = {
  fill: {
    control: {
      type: "color",
    },
  },
};
