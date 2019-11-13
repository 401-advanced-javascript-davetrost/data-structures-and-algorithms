'use strict';

const { Tree } = require('../challenges/tree/tree');
const { treeIntersection } = require('../challenges/treeIntersection/tree-intersection');

describe('Tree Intersection function', () => {
  const valueA = 'A';
  const valueB = 'B';
  const valueC = 'C';
  const valueD = 'D';
  const valueE = 'E';
  const valueF = 'F';
  const valueG = 'G';
  const valueH = 'H';
  const valueI = 'I';
  const valueJ = 'J';
  const valueK = 'K';
  const valueL = 'L';
  const valueM = 'M';
  const valueN = 'N';
  const valueO = 'O';
  const valueP = 'P';
  const valueQ = 'Q';
  const valueR = 'R';
  const valueS = 'S';
  const valueT = 'T';
  const valueU = 'U';
  const valueV = 'V';
  const valueW = 'W';
  const valueX = 'X';
  const valueY = 'Y';
  const valueZ = 'Z';

  it('finds the intersection between 2 identical trees', () => {
    const tree1 = new Tree();
    tree1.add(valueA);
    tree1.add(valueC);
    tree1.add(valueE);
    
    const tree2 = new Tree();
    tree2.add(valueA);
    tree2.add(valueC);
    tree2.add(valueE);
        
    expect(treeIntersection(tree1, tree2).toString()).toBe(`${valueA} ${valueC} ${valueE} `);
  });
  
  it('finds no intersection between 2 non-overlapping trees', () => {
    const tree1 = new Tree();
    tree1.add(valueB);
    tree1.add(valueD);
    tree1.add(valueF);
    
    const tree2 = new Tree();
    tree2.add(valueA);
    tree2.add(valueC);
    tree2.add(valueE);
    
    expect(treeIntersection(tree1, tree2).toString()).toBe(``);
  });
  
  it('finds the intersection between 2 large trees', () => {
    const tree1 = new Tree();
    tree1.add(valueA);
    tree1.add(valueB);
    tree1.add(valueC);
    tree1.add(valueD);
    tree1.add(valueE);
    tree1.add(valueF);
    tree1.add(valueG);
    tree1.add(valueH);
    tree1.add(valueI);
    tree1.add(valueJ);
    tree1.add(valueK);
    tree1.add(valueL);
    tree1.add(valueM);
    tree1.add(valueN);
    tree1.add(valueO);
    tree1.add(valueP);
    tree1.add(valueQ);
    tree1.add(valueR);
    tree1.add(valueS);
    tree1.add(valueT);
    tree1.add(valueU);
    tree1.add(valueV);
    tree1.add(valueW);
    tree1.add(valueX);
    tree1.add(valueY);
    tree1.add(valueZ);
        
    const tree2 = new Tree();
    tree2.add(valueD);
    tree2.add(valueF);
    tree2.add(valueG);
    tree2.add(valueH);
    tree2.add(valueJ);
    tree2.add(valueK);
    tree2.add(valueL);
    tree2.add(valueP);
    tree2.add(valueQ);
    tree2.add(valueR);
    tree2.add(valueS);
    tree2.add(valueT);
    tree2.add(valueV);
    tree2.add(valueW);
        
    expect(treeIntersection(tree1, tree2).toString()).toBe(`${valueD} ${valueF} ${valueG} ${valueH} ${valueJ} ${valueK} ${valueL} ${valueP} ${valueQ} ${valueR} ${valueS} ${valueT} ${valueV} ${valueW} `);
  });
  
});
