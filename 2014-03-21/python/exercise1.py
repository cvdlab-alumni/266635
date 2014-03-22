# Temle of Concordia, Andrea D'Angelo, 266635, exercise1

# importo pyplasm

from pyplasm import *

# Creo la struttura dei piani:

# Funzioni:

# funzione cerchio:

def circle(r):
    def circle0(p):
		alpha = p[0]
		return [r*COS(alpha), r*SIN(alpha)]
	return circle0

# Vars:

cells = [[1,2,3,4]]
pols = None

# Creo la struttura 2D per le colonne:

base_column = MAP(circle(0.3))(INTERVALS(2*PI)(16))

# Base

# Floor0:

coord_floor0 = [[0,0],[16.91,0],[0,39.44],[16.91,39.44]] # coordinate del floor0
floor0 = MKPOL([coord_floor0, cells, pols]) # creo il pol relativo
floor0 = STRUCT([COLOR(GREEN)(floor0)]) # coloro floor0

# Floor1:

coord_floor1 = [[0,0],[15.91,0],[0,38.44],[15.91,38.44]] # coordinate del floor1
floor1 = MKPOL([coord_floor1, cells, pols]) # creo il pol relativo
floor1 = STRUCT([COLOR(RED)(floor1)]) # coloro floor1
floor1 = STRUCT([T([1,2])([0.5,0.5])(floor1)]) # traslo floor1

# Floor2:

coord_floor2 = [[0,0],[14.91,0],[0,37.44],[14.91,37.44]] # coordinate del floor2
floor2 = MKPOL([coord_floor2, cells, pols]) # creo il pol relativo
floor2 = STRUCT([COLOR(BLUE)(floor2)]) # coloro floor2
floor2 = STRUCT([T([1,2])([1,1])(floor2)]) # traslo floor2

# Floor3:

coord_floor3 = [[0,0],[13.91,0],[0,36.44],[13.91,36.44]] # coordinate floor3
floor3 = MKPOL([coord_floor3, cells, pols]) # creo il pol relativo
floor3 = STRUCT([COLOR(BROWN)(floor3)]) # coloro floor3
floor3 = STRUCT([T([1,2])([1.5,1.5])(floor3)]) # traslo floor3

# Piano Superiore: Colonne

# Prima fila di colonne:

x_trasl_column = [T(1)(2.4),base_column]
strct_column = STRUCT(x_trasl_column)
n_column = STRUCT(NN(6)(x_trasl_column))
line_1 = STRUCT([T(2)(2),n_column])

# Seconda fila di colonne:

x_trasl_column = [T(1)(2.4),base_column]
strct_column = STRUCT(x_trasl_column)
n_column = STRUCT(NN(6)(x_trasl_column))
line_2 = STRUCT([T(2)(37.5),n_column])

# Terza fila di colonne:

y_trasl_column = [T(2)(3.3),base_column]
strct_column = STRUCT(y_trasl_column)
n_column = STRUCT(NN(11)(y_trasl_column))
line_3 = STRUCT([T(1)(2.4),n_column])

# Quarta fila di colonne:

y_trasl_column = [T(2)(3.3),base_column]
strct_column = STRUCT(y_trasl_column)
n_column = STRUCT(NN(11)(y_trasl_column))
line_4 = STRUCT([T(1)(14.4),n_column])

# Colonne interne 1:

x_trasl_column = [T(1)(5.3),base_column]
strct_column = STRUCT(x_trasl_column)
n_column = STRUCT(NN(2)(x_trasl_column))
internal_line_1 = STRUCT([T(2)(5),n_column])

# Colonne interne 2:

x_trasl_column = [T(1)(5.3),base_column]
strct_column = STRUCT(x_trasl_column)
n_column = STRUCT(NN(2)(x_trasl_column))
internal_line_2 = STRUCT([T(2)(35),n_column])

# Aggrego le colonne su un unico livello:

columns = STRUCT([line_1,line_2,line_3,line_4,internal_line_1,internal_line_2])

# Coloro e creo il piano:

floor4 = STRUCT([COLOR(WHITE)(columns)])

# Piano Superiore: Muri

# Interno1

coord_wall_1 = [[0,0],[0.3,0],[0,30.8],[0.3,30.8]]
wall_1 = MKPOL([coord_wall_1, cells, pols])
wall_1 = STRUCT([COLOR(YELLOW)(wall_1)])
wall_1 = STRUCT([T([1,2])([11.5,4.5])(wall_1)])

# Interno2

coord_wall_2 = [[0,0],[0.3,0],[0,30.8],[0.3,30.8]]
wall_2 = MKPOL([coord_wall_2, cells, pols])
wall_2 = STRUCT([COLOR(YELLOW)(wall_2)])
wall_2 = STRUCT([T([1,2])([4,4.5])(wall_2)])

# Interno3

coord_wall_3 = [[0,0],[7,0],[0,0.3],[7,0.3]]
wall_3 = MKPOL([coord_wall_3, cells, pols])
wall_3 = STRUCT([COLOR(YELLOW)(wall_3)])
wall_3 = STRUCT([T([1,2])([4.4,8])(wall_3)])

# Interno4

coord_wall_4 = [[0,0],[2.5,0],[0,1.2],[2.5,1.2]]
wall_4 = MKPOL([coord_wall_4, cells, pols])
wall_4 = STRUCT([COLOR(YELLOW)(wall_4)])
wall_4 = STRUCT([T([1,2])([4.3,31])(wall_4)])

# Interno5

coord_wall_5 = [[0,0],[2.5,0],[0,1.2],[2.5,1.2]]
wall_5 = MKPOL([coord_wall_5, cells, pols])
wall_5 = STRUCT([COLOR(YELLOW)(wall_5)])
wall_5 = STRUCT([T([1,2])([9,31])(wall_5)])

# Aggrego le colonne su un unico livello:

floor5 = STRUCT([wall_1,wall_2,wall_3,wall_4,wall_5])

# Unisco tutti i floor:

building = STRUCT([floor0,floor1,floor2,floor3,floor4,floor5])

# Visualizzo il tutto: