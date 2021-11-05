import {Tree, TreeNode} from '../trees/Tree'

test('Empty tree should have null root', () => {
    const tree = new Tree(null);
    expect(tree.root).toBe(null)
})