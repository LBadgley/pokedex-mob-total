export function createOption(type) {
    const html = /*html*/`
        <option name="type" value="${type}">${type}</option>
    `;
    const template = document.createElement('template');
    template.innerHTML = html;
    const dom = template.content;
    return dom;
}