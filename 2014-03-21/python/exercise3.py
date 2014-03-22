#  Temle of Concordia, Andrea D'Angelo, 266635, exercise2

# importo pyplasm

from pyplasm import *

# Functions:

# Parallelepipedo:

def bloccoRettangolare(lato1,lato2,altezza):
	return CUBOID([lato1,lato2,altezza])

# Cilindro:

def pilastroCilindrico(raggio,altezza):
	return CYLINDER([raggio,altezza])(36)

# Prismoide:

def Gable(radius,h,n):
	w = 1.2*radius
	l = 3*n*(2*w)
	apex = MKPOL([[[l/2,0,h/2],[l/2,w,h/2]],[[1,2]], None])
	
	basis = COMP([EMBED(1),CUBOID])([l,w])
	
	return JOIN([basis,apex])

#Constrains

baseRettangolo1 = 16.91
altezzaRettangolo1 = 39.44
altezza1 = 0.6
baseRettangolo2 = 15.91
altezzaRettangolo2 = 38.44
altezza2 = 1.2
baseRettangolo3 = 14.91
altezzaRettangolo3 = 37.44
altezza3 = 1.8
baseRettangolo4 = 13.91
altezzaRettangolo4 = 36.44
altezza4 = 2.4
raggioColonna = 0.3
altezzaColonna = 6.72

# First Floor:

rettangolo1 = bloccoRettangolare(baseRettangolo1,altezzaRettangolo1,altezza1)

# Second Floor:

rettangolo2 = bloccoRettangolare(baseRettangolo2,altezzaRettangolo2,altezza2)

rettangolo2 = STRUCT([T([1,2])([0.5,0.5])(rettangolo2)])

# Third Floor:

rettangolo3 = bloccoRettangolare(baseRettangolo3,altezzaRettangolo3,altezza3)

rettangolo3 = STRUCT([T([1,2])([1,1])(rettangolo3)])

# Fourth Floor:

rettangolo4 = bloccoRettangolare(baseRettangolo4,altezzaRettangolo4,altezza4)

rettangolo4 = STRUCT([T([1,2])([1.5,1.5])(rettangolo4)])

# Unisco tutto in una struttura:

base_building = STRUCT([rettangolo1,rettangolo2,rettangolo3,rettangolo4])

base_building = STRUCT([base_building])

# Columns:

# creo la colonna:

colonna = pilastroCilindrico(raggioColonna,altezzaColonna)

# traslo e creo la fila1:

colonnaTraslata = [T(1)(2.4),colonna]

colonna_Traslata = STRUCT(colonnaTraslata)

fila_colonne_1 = STRUCT(NN(6)(colonnaTraslata))

fila_1 = STRUCT([T([2,3])([2,1.5]),fila_colonne_1])

# traslo e creo la fila2:

colonnaTraslata = [T(1)(2.4),colonna]

colonna_Traslata = STRUCT(colonnaTraslata)

fila_colonne_2 = STRUCT(NN(6)(colonnaTraslata))

fila_2 = STRUCT([T([2,3])([37.5,1.5]),fila_colonne_2])

# traslo e creo la fila3:

colonnaTraslata = [T(2)(3.3),colonna]

colonna_Traslata = STRUCT(colonnaTraslata)

fila_colonne_3 = STRUCT(NN(11)(colonnaTraslata))

fila_3 = STRUCT([T([1,3])([2.4,1.5]),fila_colonne_3])

# traslo e creo la fila4:

colonnaTraslata = [T(2)(3.3),colonna]

colonna_Traslata = STRUCT(colonnaTraslata)

fila_colonne_4 = STRUCT(NN(11)(colonnaTraslata))

fila_4 = STRUCT([T([1,3])([14.4,1.5]),fila_colonne_4])

# traslo e creo la fila interna 1:

colonnaTraslata = [T(1)(5.3),colonna]

colonna_Traslata = STRUCT(colonnaTraslata)

fila_interna_1 = STRUCT(NN(2)(colonnaTraslata))

fila_interna_1 = STRUCT([T([2,3])([5,1.5]),fila_interna_1])

# traslo e creo la fila interna 2:

colonnaTraslata = [T(1)(5.3),colonna]

colonna_Traslata = STRUCT(colonnaTraslata) 

fila_interna_2 = STRUCT(NN(2)(colonnaTraslata))

fila_interna_2 = STRUCT([T([2,3])([35,1.5]),fila_interna_2])

# Unisco il tutto in una struttura:

column_building = STRUCT([fila_1,fila_2,fila_3,fila_4,fila_interna_1,fila_interna_2])

base_column_building = STRUCT([base_building,column_building])

# Internal walls:

# Wall 1:

muro_interno_1 = bloccoRettangolare(0.3,30.8,altezzaColonna)

muro_interno_1 = STRUCT([T([1,2,3])([11.5,4.5,1.5])(muro_interno_1)])

# Wall 2:

muro_interno_2 = bloccoRettangolare(0.3,30.8,altezzaColonna)

muro_interno_2 = STRUCT([T([1,2,3])([4,4.5,1.5])(muro_interno_2)])

# Wall 3:

muro_interno_3 = bloccoRettangolare(7,0.3,altezzaColonna)

muro_interno_3 = STRUCT([T([1,2,3])([4.4,8,1.5])(muro_interno_3)])

# Wall 4:

muro_interno_4 = bloccoRettangolare(2.5,1.2,altezzaColonna)

muro_interno_4 = STRUCT([T([1,2,3])([4.3,31,1.5])(muro_interno_4)])

# Wall 5:

muro_interno_5 = bloccoRettangolare(2.5,1.2,altezzaColonna)

muro_interno_5 = STRUCT([T([1,2,3])([9,31,1.5])(muro_interno_5)])

# Unisco il tutto in una struttura:

muri_interni = STRUCT([muro_interno_1,muro_interno_2,muro_interno_3,muro_interno_4,muro_interno_5])

# Base Roof:

# creo la base del tetto:

baseTetto = bloccoRettangolare(baseRettangolo4,altezzaRettangolo4,altezza1)
baseTetto = STRUCT([baseTetto])

baseTettoTraslata = STRUCT([T([1,2,3])([1.5,1.5,8.2]),baseTetto])

tetto = STRUCT([baseTettoTraslata])

# Roof:

# creo il tetto:

tetto_triangolare = Gable(1,6,2)

tetto_allungato = S(2)(30.44)(tetto_triangolare)

tetto_allungato_traslato = STRUCT([T([1,2,3])([1.2,1.5,8.8]),tetto_allungato]) 

# Unisco il tutto in una struttura:

tetto_finale = STRUCT([tetto,tetto_allungato_traslato])

# FINAL:

# creo il building completo e lo visualizzo:

solid_model_3D = STRUCT([base_column_building,muri_interni,tetto_finale])

VIEW(SKELETON(1)(solid_model_3D))
VIEW(solid_model_3D)





