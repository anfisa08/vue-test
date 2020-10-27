export default function highlightFilter(value: string, searchPhrase: string = '') {
    return value.replaceAll(new RegExp('(' + searchPhrase + ')', 'gim'), '<span class="highlighted">$1</span>')
}