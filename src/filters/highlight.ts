export default function highlightFilter(value: string, searchPhrase: string = '') {
    if(searchPhrase.trim() !=='')
        return value.replaceAll(new RegExp('(' + searchPhrase + ')', 'gim'), '<span class="highlighted">$1</span>')
    else
        return value
}