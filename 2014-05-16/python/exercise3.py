# Exercise 3: Andrea D'Angelo 266635, Homework 3
from pyplasm import *
from scipy import *

import os,sys

# N.B. : PER UNA CORRETTA VISUALIZZAZIONE, SOSTITUIRE IL PATH CORRENTE 
#        CON QUELLO DOVE E' SITUATA LA LIBRERIA lar-cc .
sys.path.insert(0, '/Library/Python/2.7/site-packages/lar-cc/lib/py/')

from sysml import *

''' Exercise 3 : '''

# Visualizer

DRAW = COMP([VIEW,STRUCT,MKPOLS])

# Function Automatize:

def Automatize(diagram, master, cells_to_merge) :
    
    to_merge=list.sort(cells_to_merge)
    to_merge=list.reverse(cells_to_merge)	
    
    for k in cells_to_merge:
        master = diagram2cell(diagram,master,k)
    
    hpc = SKEL_1(STRUCT(MKPOLS(master)))
    hpc = AutomatizeCellNumbering(master, hpc)
    
    VIEW(hpc)
    
    def Automatize0(cells_to_remove) :
    
        final_V,final_CV = master
        hpc_final = final_V, [cell for k,cell in enumerate(final_CV) if not (k in cells_to_remove)]
    
        DRAW(hpc_final)
    
        return hpc_final
    
    return Automatize0


# Function AutomatizeCellNumbering:

def AutomatizeCellNumbering(master, hpc) :

    hpc = cellNumbering (master,hpc)(range(len(master[1])),YELLOW,2)

    return hpc

""" Some Test: """

master = assemblyDiagramInit([5,5,2])([[.3,3.2,.1,5,.3],[.3,4,.1,2.9,.3],[.3,2.7]])

hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(master[1])),GREEN,2)

VIEW(hpc)

diagram = assemblyDiagramInit([3,1,2])([[2,1,2],[.3],[2.2,.5]])

hpc_diagram = SKEL_1(STRUCT(MKPOLS(diagram)))
hpc_diagram = cellNumbering (diagram,hpc_diagram)(range(len(diagram[1])),YELLOW,2)

VIEW(hpc_diagram)

to_merge_chain = [19,31,39]

# partial application:

out = Automatize(diagram,master,to_merge_chain)

to_remove_chain = [13,17,31,35,55,49,61]

out(to_remove_chain)

''' That's All Folks! '''