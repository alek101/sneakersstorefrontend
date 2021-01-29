export const formatPrice=(num,option='sr-RS') => {
    return new Intl.NumberFormat(option,{minimumFractionDigits: 2}).format(num);
};

export const formatDate=(date,option='sr-RS') => {
        let d=new Date(date);
        return d.toLocaleDateString(option);
    };