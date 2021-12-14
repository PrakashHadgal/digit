import React from "react";
import { CardLabelError, TextInput, RadioButtons } from "@egovernments/digit-ui-react-components";
import { Controller } from "react-hook-form";

const isValidFromDate = () => true;
const isValidToDate = () => true;
const isValidFromTime = () => true;
const isValidToTime = () => true;

const SurveySettingsForms = ({ t, controlSurveyForm, surveyFormState, disableInputs, enableEndDateTimeOnly }) => {
  const formErrors = surveyFormState?.errors;
  return (
    <div className="surveydetailsform-wrapper">
      <div className="heading">{t("CS_COMMON_SETTINGS")}</div>
      <span className="surveyformfield">
        <label>{t("LABEL_SURVEY_START_DATE")}</label>
        <Controller
          control={controlSurveyForm}
          name="fromDate"
          defaultValue={surveyFormState?.fromDate}
          rules={{ required: true, validate: { isValidFromDate } }}
          render={({ onChange, value }) => <TextInput type="date" isRequired={true} onChange={onChange} defaultValue={value} disable={disableInputs}/>}
        />
        {formErrors && formErrors?.fromDate && formErrors?.fromDate?.type === "required" && (
          <CardLabelError>{t(`EVENTS_TO_DATE_ERROR_REQUIRED`)}</CardLabelError>
        )}
        {formErrors && formErrors?.fromDate && formErrors?.fromDate?.type === "isValidToDate" && (
          <CardLabelError>{t(`EVENTS_TO_DATE_ERROR_INVALID`)}</CardLabelError>
        )}
      </span>

      <span className="surveyformfield">
        <label>{t("LABEL_SURVEY_START_TIME")}</label>
        <Controller
          control={controlSurveyForm}
          name="fromTime"
          defaultValue={surveyFormState?.fromTime}
          rules={{ required: true, validate: { isValidFromTime } }}
          render={({ onChange, value }) => <TextInput type="time" isRequired={true} onChange={onChange} defaultValue={value} disable={disableInputs} />}
        />
        {formErrors && formErrors?.fromTime && formErrors?.fromTime?.type === "required" && (
          <CardLabelError>{t(`EVENTS_TO_DATE_ERROR_REQUIRED`)}</CardLabelError>
        )}
        {formErrors && formErrors?.fromTime && formErrors?.fromTime?.type === "isValidToDate" && (
          <CardLabelError>{t(`EVENTS_TO_DATE_ERROR_INVALID`)}</CardLabelError>
        )}
      </span>

      <span className="surveyformfield">
        <label>{t("LABEL_SURVEY_END_DATE")}</label>
        <Controller
          control={controlSurveyForm}
          name="toDate"
          defaultValue={surveyFormState?.toDate}
          rules={{ required: true, validate: { isValidToDate } }}
          render={({ onChange, value }) => <TextInput type="date" isRequired={true} onChange={onChange} defaultValue={value} disable={enableEndDateTimeOnly ? !enableEndDateTimeOnly : disableInputs}/>}
        />
        {formErrors && formErrors?.toDate && formErrors?.toDate?.type === "required" && (
          <CardLabelError>{t(`EVENTS_TO_DATE_ERROR_REQUIRED`)}</CardLabelError>
        )}
        {formErrors && formErrors?.toDate && formErrors?.toDate?.type === "isValidToDate" && (
          <CardLabelError>{t(`EVENTS_TO_DATE_ERROR_INVALID`)}</CardLabelError>
        )}{" "}
      </span>

      <span className="surveyformfield">
        <label>{t("LABEL_SURVEY_END_TIME")}</label>

        <Controller
          control={controlSurveyForm}
          name="toTime"
          defaultValue={surveyFormState?.toTime}
          rules={{ required: true, validate: { isValidToTime } }}
          render={({ onChange, value }) => <TextInput type="time" isRequired={true} onChange={onChange} defaultValue={value} disable={enableEndDateTimeOnly ? !enableEndDateTimeOnly : disableInputs}/>}
        />
        {formErrors && formErrors?.toTime && formErrors?.toTime?.type === "required" && (
          <CardLabelError>{t(`EVENTS_TO_DATE_ERROR_REQUIRED`)}</CardLabelError>
        )}
        {formErrors && formErrors?.toTime && formErrors?.toTime?.type === "isValidToDate" && (
          <CardLabelError>{t(`EVENTS_TO_DATE_ERROR_INVALID`)}</CardLabelError>
        )}
      </span>
      <span className="surveyformfield">
        <label>{t("LABEL_SURVEY_EMAIL_MOBILE")}</label>
        <Controller
          control={controlSurveyForm}
          name="collectCitizenInfo"
          defaultValue={surveyFormState?.collectCitizenInfo}
          rules={{ required: true }}
          render={({ onChange, value }) => (
            <RadioButtons
              onSelect={onChange}
              selectedOption={value}
              optionsKey="name"
              options={[
                { code: true, name: t("ES_COMMON_YES") },
                { code: false, name: t("ES_COMMON_NO") },
              ]}
              disabled={disableInputs}
            />
          )}
        />
        {formErrors && formErrors?.collectCitizenInfo && formErrors?.collectCitizenInfo?.type === "required" && (
          <CardLabelError>{t(`EVENTS_TO_DATE_ERROR_REQUIRED`)}</CardLabelError>
        )}
      </span>
    </div>
  );
};

export default SurveySettingsForms;