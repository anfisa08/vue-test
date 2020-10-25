export default function dateFilter(value: string, format = 'date') {

    class Options {

        hour?: string;
        minute?: string;
        second?: string;

        constructor(public day: string, public month: string, public year: string) {}
    }

    const options: Options = new Options('2-digit','long','numeric');

    if (format.includes('time')) {
        options.hour = '2-digit';
        options.minute = '2-digit';
        options.second = '2-digit';
    }

    return new Intl.DateTimeFormat('ru-Ru', options).format(new Date(value))
}