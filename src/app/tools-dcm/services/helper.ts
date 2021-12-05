/**
 *
 * @param predicate: (item) => boolean
 * @param getChildren: (item) => treeNode[]
 * @param treeNode: treeNode[]
 * @returns
 */
export function searchTree(predicate: any, getChildren: any, treeNode: any[]) {
  function search(treeNode: any): any {
    if (!treeNode) {
      return undefined;
    }

    for (let treeItem of treeNode) {
      if (predicate(treeItem)) {
        return treeItem;
      }

      const foundItem = search(getChildren(treeItem));

      if (foundItem) {
        return foundItem;
      }
    }
  }

  return search(treeNode);
}

/**
 *
 * @param trees treeNode[]
 * @param nodeId elementMatch.id
 * @returns nodeSearch | undefined
 */
export function searchTreeNodePrev(trees: any[], nodeId?: number): any | undefined {
  let stack = JSON.parse(JSON.stringify(trees));
  while (stack.length > 0) {
    let node = stack.pop();
    if (node && node['id'] == nodeId) {
      // Found it!
      return node;
    } else if (node && node.childs && node.childs.length > 0) {
      for (let i = 0; i < node.childs.length; i++) {
        stack.push(node.childs[i]);
      }
    }
  }
  // Didn't find it. Return null.
  return null;
}
