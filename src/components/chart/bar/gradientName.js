import { snakeCase } from 'change-case';

export default function gradientName(item) {
    return `gradient_${snakeCase(item.name)}`;
}
