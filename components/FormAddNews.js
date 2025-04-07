import React from 'react';
import { View, TextInput, Button } from 'react-native';
import { gStyle } from '../styles/style';
import { Formik } from 'formik';

export default function FormAddNews({AddNews, setModalWindow}) {
  const submitFormAddNews = (values, action) => {
    AddNews(values)
    action.resetForm();
  }
  const defaultFormValues = {
    name:'', 
    previewText:'', 
    detailText:'',
    imgUrl: '',
    tags: []
  }

  return (
    <View>
      <Formik initialValues={defaultFormValues} onSubmit={submitFormAddNews}>
        {(props) => (
          <View style={[gStyle.formAddNews, gStyle.form]}>
            <TextInput style={gStyle.textInput} value={props.values.name} placeholder='Название новости' onChangeText={props.handleChange('name')} />
            <TextInput style={gStyle.textInput} value={props.values.previewText} placeholder='Название анонс' onChangeText={props.handleChange('previewText')} />
            <TextInput style={gStyle.textInput} multiline value={props.values.detailText} placeholder='Название подробный текст' onChangeText={props.handleChange('detailText')} />
            <TextInput style={gStyle.textInput} value={props.values.imgUrl} placeholder='Ссылка на картинку' onChangeText={props.handleChange('imgUrl')} />
            <TextInput style={gStyle.textInput} value={(typeof props.values.tags == 'object' ? props.values.tags.map(el => el.name).join(',') : props.values.tags)} placeholder='Теги (через запятую)' onChangeText={props.handleChange('tags')} />
            <Button style={gStyle.buttonSubmit} color={'green'} title='Добавить' onPress={props.handleSubmit} />
            <Button color={'red'} title='Отменить' onPress={
              () => {
                props.handleReset
                setModalWindow(false)
              }
            } />
          </View>
        )}
      </Formik>
    </View>
  );
}
