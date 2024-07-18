import  { StartMonthEnum, StartYearEnum, PaymentTermEnum } from './Enums'

export const PastelCodeTable = [
    {
        header: 'Pastel Code',
        accessor: 'pastel_code',
        type: 'string',
    }
]

export const InvoiceDescriptionTable = [
    {
        header: 'Invoice Description',
        accessor: 'invoice_description',
        type: 'string',
    }
]

export const SalesRepTable = [
    {
        header: 'Sales Rep No',
        accessor: 'sales_rep_no',
        type: 'string',
    },
    {
        header: 'Name',
        accessor: 'name',
        type: 'string',
    }
]

export const AccountTable = [
    {
        header: 'Account No',
        accessor: 'account_no',
        type: 'string',
    },
    {
        header: 'Registered Company Name',
        accessor: 'registered_company_name',
        type: 'string',
    }
]

export const GroupingTable = [
    {
        header: 'Grouping',
        accessor: 'grouping',
        type: 'string',
    }
]

export const AddressTable = [
    {
        header: 'Address',
        accessor: 'address',
        type: 'string',
    },
    {
        header: 'Account',
        accessor: 'account',
        type: 'reference',
        source: 'Account',
        select: 'account_no'
    }
]

export const ContractTable = [
    {
        header: 'Contract No',
        accessor: 'contract_no',
        type: 'string',
    },
    {
        header: 'Account',
        accessor: 'account',
        type: 'reference',
        source: 'Account',
        select: 'account_no'
    }
]

export const OrderTable = [
    {
        header: 'Account',
        accessor: 'account',
        type: 'reference',
        source: 'Account',
        select: 'account_no'
    },
    {
        header: 'Address',
        accessor: 'address',
        type: 'reference',
        source: 'Address',
        select: 'address'
    },
    {
        header: 'Contract',
        accessor: 'contract',
        type: 'reference',
        source: 'Contract',
        select: 'contract_no'
    },
    {
        header: 'Grouping',
        accessor: 'grouping',
        type: 'reference',
        source: 'Grouping',
        select: 'grouping'
    },
    {
        header: 'Sales Rep',
        accessor: 'sales_rep',
        type: 'reference',
        source: 'SalesRep',
        select: 'sales_rep_no'
    },
    {
        header: 'Pastel Code',
        accessor: 'pastel_code',
        type: 'reference',
        source: 'PastelCode',
        select: 'pastel_code'
    },
    {
        header: 'Invoice Description',
        accessor: 'invoice_description',
        type: 'reference',
        source: 'InvoiceDescription',
        select: 'invoice_description'
    },
    {
        header: 'Start Month',
        accessor: 'start_month',
        type: 'enum',
        source: StartMonthEnum
    },
    {
        header: 'Start Year',
        accessor: 'start_year',
        type: 'enum',
        source: StartYearEnum
    },
    {
        header: 'Payment Term',
        accessor: 'payment_term',
        type: 'enum',
        source: PaymentTermEnum
    },
    {
        header: 'No Services Per Year',
        accessor: 'no_services_per_year',
        type: 'integer',
    },
    {
        header: 'Current FY Monthly Price Exc Vat',
        accessor: 'current_fy _monthly_price_exc_vat',
        type: 'string',
    },
    {
        header: 'Current FY Annual Value',
        accessor: 'current_fy_annual_value',
        type: 'double',
    },
    {
        header: 'Increase',
        accessor: 'increase',
        type: 'double',
    },
    {
        header: 'Budget FY Monthly Price Exc Vat',
        accessor: 'budget_fy_monthly_price_exc_vat',
        type: 'double',
    },
    {
        header: 'Budget FY Annual Value',
        accessor: 'budget_fy_annual_value',
        type: 'double',
    },
    {
        header: 'Qquote Beginning Of Month',
        accessor: 'quote_beginning_of_month',
        type: 'double',
    },
    {
        header: 'Order No',
        accessor: 'order_no',
        type: 'string',
    },
    {
        header: 'Accounting Note',
        accessor: 'accounting_note',
        type: 'string',
    }
]
